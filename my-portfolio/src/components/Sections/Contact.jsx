import React from 'react';
import Window from '../Terminal/Window';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 border-t border-[#1a1a1a]">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-[#ff6b00] text-xl">✉️</span>
        <h2 className="text-3xl font-bold font-mono tracking-widest text-gray-100 uppercase">
          $ ./contact.exe
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Info JSON */}
        <Window title="contact_info.json">
          <div className="space-y-1 font-mono text-sm">
            <p className="text-gray-500">{"{"}</p>
            <p className="pl-4">
              <span className="text-purple-400">"status"</span>: <span className="text-green-400">"open_to_work"</span>,
            </p>
            <p className="pl-4">
              <span className="text-purple-400">"email"</span>: <span className="text-green-400">"anoop.prakash@dev.com"</span>,
            </p>
            <p className="pl-4">
              <span className="text-purple-400">"socials"</span>: {"{"}
            </p>
            <div className="pl-8 space-y-1">
              <p>
                <span className="text-purple-400">"github"</span>: <span className="text-green-400">"@AnoopPrakash"</span>,
              </p>
              <p>
                <span className="text-purple-400">"linkedin"</span>: <span className="text-green-400">"@anoop-prakash-dev"</span>
              </p>
            </div>
            <p className="pl-4">{"},"}</p>
            <p className="pl-4">
              <span className="text-purple-400">"location"</span>: <span className="text-green-400">"Jaipur, Rajasthan, India"</span>
            </p>
            <p className="text-gray-500">{"}"}</p>
            
            <div className="pt-8 text-[#4d4d4d] italic">
              // Waiting for connection...
            </div>
          </div>
        </Window>

        {/* Mock Message Script */}
        <Window title="sendMessage.ts">
          <div className="space-y-4 font-mono text-sm">
            <p className="text-gray-500">// Run this script to send a message</p>
            <div className="space-y-2">
              <p className="text-purple-400">const <span className="text-blue-400">send</span> = <span className="text-yellow-300">async</span> () =&gt; {"{"}</p>
              
              <div className="pl-4 space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-gray-500 text-xs">// Enter your name</span>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="bg-transparent border-b border-[#1a1a1a] focus:border-[#ff6b00] outline-none py-1 text-white placeholder:text-[#2d2d2d] w-full"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-gray-500 text-xs">// Enter your message</span>
                  <textarea 
                    placeholder="Type your message here..." 
                    rows="3"
                    className="bg-transparent border-b border-[#1a1a1a] focus:border-[#ff6b00] outline-none py-1 text-white placeholder:text-[#2d2d2d] w-full resize-none"
                  ></textarea>
                </div>

                <button className="bg-[#ff6b00] hover:bg-orange-600 text-black px-4 py-2 rounded flex items-center gap-2 font-bold transition-all text-xs">
                  <Send size={14} /> RUN SCRIPT
                </button>
              </div>
              
              <p className="text-purple-400">{"};"}</p>
            </div>
          </div>
        </Window>
      </div>
    </section>
  );
};

export default Contact;