'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeIn, staggerContainer } from '../utils/motion';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = {
    introduction: {
      title: 'Introduction',
      content: (
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-secondary-white text-[16px] leading-[26px]">
            TELEGRAM AGENTS AI is an innovative fork of the official Telegram client that brings intelligent automation to your messaging experience. Our platform enables advanced message handling, automated responses, and custom AI interactions through a simple yet powerful interface.
          </p>
          <div className="bg-[#1A232E]/30 p-4 rounded-lg">
            <h4 className="text-white font-semibold text-[24px] mb-4">Why Choose TELEGRAM AGENTS AI?</h4>
            <ul className="text-secondary-white text-sm space-y-2">
              <li>• Seamless integration with your existing Telegram account</li>
              <li>• No coding required - just configure and deploy</li>
              <li>• Advanced AI capabilities powered by our native token system</li>
              <li>• Secure and privacy-focused design</li>
            </ul>
          </div>
          <div className="bg-[#1A232E]/30 p-4 rounded-lg">
            <h4 className="text-white font-semibold text-[24px] mb-4">Platform Overview</h4>
            <p className="text-secondary-white text-sm">
              Our platform consists of three main components: the agent system, the token economy, and the extension marketplace. Each component is designed to work seamlessly together, providing you with a powerful automation toolkit for your Telegram communications.
            </p>
          </div>
        </div>
      ),
    },
    agents: {
      title: 'Available Agents',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <img src="/planet-01.png" alt="Auto Responder" className="w-full h-32 object-cover rounded-lg" />
            <img src="/planet-02.png" alt="Message Filter" className="w-full h-32 object-cover rounded-lg" />
            <img src="/planet-03.png" alt="Custom AI" className="w-full h-32 object-cover rounded-lg" />
          </div>
          <div className="bg-[#1A232E]/30 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Auto Responder Agents</h4>
            <p className="text-secondary-white text-sm">
              Automatically respond to messages based on custom triggers and rules. Perfect for away messages, FAQs, and customer service automation.
            </p>
            <ul className="text-secondary-white text-sm mt-2 space-y-1">
              <li>• Customizable response templates</li>
              <li>• Time-based triggers</li>
              <li>• Keyword matching</li>
              <li>• Context-aware responses</li>
            </ul>
          </div>
          <div className="bg-[#1A232E]/30 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Message Filter Agents</h4>
            <p className="text-secondary-white text-sm">
              Sort and organize incoming messages based on custom criteria. Route messages to appropriate channels or groups automatically.
            </p>
            <ul className="text-secondary-white text-sm mt-2 space-y-1">
              <li>• Advanced filtering rules</li>
              <li>• Smart message categorization</li>
              <li>• Automated routing</li>
              <li>• Priority handling</li>
            </ul>
          </div>
          <div className="bg-[#1A232E]/30 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Custom AI Agents</h4>
            <p className="text-secondary-white text-sm">
              Train your own AI agent using our native token system. Create specialized agents for unique use cases and communication patterns.
            </p>
            <ul className="text-secondary-white text-sm mt-2 space-y-1">
              <li>• Custom training workflows</li>
              <li>• Behavior fine-tuning</li>
              <li>• Pattern recognition</li>
              <li>• Continuous learning</li>
            </ul>
          </div>
        </div>
      ),
    },
    gettingStarted: {
      title: 'Getting Started',
      content: (
        <div className="bg-[#1A232E]/30 p-4 rounded-lg">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="bg-[#25618B] px-2 py-1 rounded-md text-sm">1</span>
              <p className="text-secondary-white text-sm">
                Login to Telegram using TGAI instance
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#25618B] px-2 py-1 rounded-md text-sm">2</span>
              <p className="text-secondary-white text-sm">
                In your Telegram open "General Settings"
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#25618B] px-2 py-1 rounded-md text-sm">3</span>
              <p className="text-secondary-white text-sm">
                Enable Telegram Agents
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#25618B] px-2 py-1 rounded-md text-sm">4</span>
              <p className="text-secondary-white text-sm">
                Choose your preferred agent from deployed collection
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#25618B] px-2 py-1 rounded-md text-sm">5</span>
              <p className="text-secondary-white text-sm">
                That's it, enjoy hands free Telegram automations
              </p>
            </div>
          </div>
        </div>
      ),
    },
    features: {
      title: 'Key Features',
      content: (
        <div className="space-y-6">
          <div className="bg-[#1A232E]/30 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Advanced Automations</h4>
            <p className="text-secondary-white text-sm">
              Create complex automations easy. Just tell your Agents objectives and they will do the work. Our advanced automation system handles the complexity while you focus on results.
            </p>
          </div>
          <div className="bg-[#1A232E]/30 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Smart Agents</h4>
            <p className="text-secondary-white text-sm">
              Your agents adopt your messaging style and analyze message context to provide most accurate results. The more you use them, the better they become at understanding your preferences and communication patterns.
            </p>
          </div>
        </div>
      ),
    },
    marketplace: {
      title: 'Extension Marketplace',
      content: (
        <div className="space-y-6">
          <div className="flex justify-center mb-6">
            <img src="/rocket.svg" alt="Marketplace" className="w-24 h-24" />
          </div>
          <p className="text-secondary-white text-[16px] leading-[26px]">
            The TGAI Extension Marketplace is where innovation meets opportunity. Create, share, and monetize your Telegram automation solutions while helping others enhance their messaging experience.
          </p>
          <div className="bg-[#1A232E]/30 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Build and Sell Extensions</h4>
            <p className="text-secondary-white text-sm">
              Create your own Telegram extensions and sell them on our marketplace using $TGAI tokens. Build custom solutions for specific use cases and monetize your innovations. Our developer tools and documentation make it easy to get started.
            </p>
          </div>
          <div className="bg-[#1A232E]/30 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Token Economy</h4>
            <p className="text-secondary-white text-sm">
              $TGAI tokens are the backbone of our ecosystem. Use them to access premium features, purchase extensions, or earn by contributing to the marketplace. Our token economy ensures fair compensation for developers and value for users.
            </p>
          </div>
          <div className="bg-[#1A232E]/30 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Community Development</h4>
            <p className="text-secondary-white text-sm">
              Join our community of developers building the future of Telegram automation. Share your extensions, collaborate with others, and earn rewards. Participate in challenges, get early access to new features, and shape the future of the platform.
            </p>
          </div>
        </div>
      ),
    },
    useCases: {
      title: 'Use Cases',
      content: (
        <div className="space-y-6">
          <div className="bg-[#1A232E]/30 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Business Communication</h4>
            <p className="text-secondary-white text-sm">
              Streamline customer service and internal communication with automated responses and intelligent message routing. Perfect for:
            </p>
            <ul className="text-secondary-white text-sm mt-2 space-y-1">
              <li>• Customer support automation</li>
              <li>• Lead qualification</li>
              <li>• Internal team coordination</li>
              <li>• Multi-channel management</li>
            </ul>
          </div>
          <div className="bg-[#1A232E]/30 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Personal Use</h4>
            <p className="text-secondary-white text-sm">
              Manage your personal messages with auto-replies, away messages, and smart filtering. Ideal for:
            </p>
            <ul className="text-secondary-white text-sm mt-2 space-y-1">
              <li>• Vacation responders</li>
              <li>• Message prioritization</li>
              <li>• Content organization</li>
              <li>• Time management</li>
            </ul>
          </div>
          <div className="bg-[#1A232E]/30 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Community Management</h4>
            <p className="text-secondary-white text-sm">
              Efficiently manage large Telegram groups and channels with automated moderation and response systems. Essential for:
            </p>
            <ul className="text-secondary-white text-sm mt-2 space-y-1">
              <li>• Content moderation</li>
              <li>• Member engagement</li>
              <li>• Event coordination</li>
              <li>• Analytics tracking</li>
            </ul>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="bg-primary-black min-h-screen flex flex-col">
      <div className="fixed top-8 left-8 z-50">
        <a href="/" className="flex items-center gap-4 text-white hover:text-gray-300 transition-colors">
          <img 
            src="/logo_xs.png" 
            alt="home" 
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-extrabold text-[24px] leading-[30px]">TGAIGENTS</span>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex-grow min-h-[90vh] mt-16">
        <div className="flex gap-8">
          <div className="w-72 flex-shrink-0">
            <div className="sticky top-8">
              <h2 className="text-white text-[28px] font-bold mb-8 mt-8">Documentation</h2>
              <nav className="space-y-4">
                {Object.entries(sections).map(([key, section]) => (
                  <div
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`cursor-pointer py-3 px-4 rounded-lg transition-colors text-[18px] ${
                      activeSection === key
                        ? 'bg-[#25618B]/20 text-white font-semibold'
                        : 'text-secondary-white hover:bg-[#25618B]/10'
                    }`}
                  >
                    {section.title}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex-1 max-w-3xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              <motion.div
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="bg-[#1A232E]/50 rounded-xl p-8"
              >
                <h1 className="font-bold lg:text-[42px] md:text-[34px] text-[30px] text-white mb-8">
                  {sections[activeSection].title}
                </h1>
                {sections[activeSection].content}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold text-xl">TELEGRAM AGENTS AI</h3>
              <p className="text-secondary-white text-sm mt-2">
                Intelligent automation for your Telegram experience
              </p>
            </div>
            <div className="flex gap-6">
              <a href="https://twitter.com" className="text-secondary-white hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <img src="/x.svg" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://telegram.org" className="text-secondary-white hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <img src="/telegram.svg" alt="Telegram" className="w-6 h-6" />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-secondary-white text-sm">© 2024 TELEGRAM AGENTS AI</p>
              <p className="text-secondary-white text-sm mt-1">All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
