import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-email', {
        body: {
          to: 'amrhewala@gmail.com',
          subject: `Contact form submission from ${data.name}`,
          text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
        },
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-16" id="contact">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Input
              placeholder="Your name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Your email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Your message"
              className="min-h-[150px]"
              {...register("message", { required: true })}
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};