import React, { useState } from 'react';
import { useConversation } from '@11labs/react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mic, Send, Bot, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot' | 'agent';
  timestamp: Date;
}

type ConversationMessage = {
  message: string;
  source: string;
}

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const conversation = useConversation({
    onMessage: (message: ConversationMessage) => {
      if (message.source === 'agent') {
        addMessage(message.message, 'bot');
      }
    },
    onError: (error: unknown) => {
      toast({
        title: t('error'),
        description: typeof error === 'string' ? error : (error as Error).message,
        variant: "destructive",
      });
    }
  });

  const addMessage = (text: string, sender: 'user' | 'bot' | 'agent') => {
    setMessages(prev => [...prev, {
      id: Math.random().toString(),
      text,
      sender,
      timestamp: new Date()
    }]);
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    addMessage(inputText, 'user');
    // Here you would integrate with your real chat backend
    setInputText('');
  };

  const toggleVoiceMode = async () => {
    if (!isVoiceMode) {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        await conversation.startSession({
          agentId: "default_agent" // Replace with your ElevenLabs agent ID
        });
        setIsVoiceMode(true);
      } catch (error) {
        toast({
          title: t('error'),
          description: t('microphoneAccessDenied'),
          variant: "destructive",
        });
      }
    } else {
      await conversation.endSession();
      setIsVoiceMode(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-md bg-background border rounded-lg shadow-lg">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">{t('chat')}</h2>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-2 mb-4 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.sender !== 'user' && (
              <Bot className="w-6 h-6 text-primary" />
            )}
            <div
              className={`p-3 rounded-lg max-w-[80%] ${
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}
            >
              {message.text}
            </div>
            {message.sender === 'user' && (
              <User className="w-6 h-6 text-primary" />
            )}
          </div>
        ))}
      </ScrollArea>

      <div className="p-4 border-t flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleVoiceMode}
          className={isVoiceMode ? 'bg-red-100' : ''}
        >
          <Mic className="h-4 w-4" />
        </Button>
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={t('typeMessage')}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button onClick={handleSend}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
