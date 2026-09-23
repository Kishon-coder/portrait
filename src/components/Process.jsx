import { motion } from 'framer-motion';
import {
  Image,
  Palette,
  CreditCard,
  PenTool,
  Package,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Image,
    title: 'Send Your Photo',
    description:
      'Share the reference photo you want turned into artwork over WhatsApp or email.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Choose Your Style',
    description:
      'Choose pencil, charcoal or digital style, along with the size and framing options.',
  },
  {
    number: '03',
    icon: CreditCard,
    title: 'Make Your Payment',
    description:
      'Once the artwork details are confirmed, complete the payment to start your portrait.',
  },
  {
    number: '04',
    icon: PenTool,
    title: 'I Create Your Artwork',
    description:
      'After payment confirmation, I carefully sketch, shade and refine your portrait.',
  },
  {
    number: '05',
    icon: Package,
    title: 'Receive Your Portrait',
    description:
      'Your finished portrait is carefully packed and shipped, or delivered digitally.',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 font-body text-xs uppercase tracking-[0.25em] text-bronze">
            Simple Process
          </p>

          <h2 className="font-display text-4xl text-bone sm:text-5xl">
            How It Works
          </h2>

          <p className="mt-4 font-body text-bone/60">
            From your favourite photo to a finished portrait —
            here is how the process works.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">

          {/* Desktop connecting line */}
          <div className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-bone/10 lg:block" />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: '-60px',
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.12,
                  }}
                  className="relative text-center lg:text-left"
                >

                  {/* Number circle */}
                  <div className="relative z-10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-bronze/50 bg-ink font-display text-sm text-bronze lg:mx-0">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <Icon
                    size={21}
                    className="mx-auto mb-4 text-bronze/70 lg:mx-0"
                  />

                  {/* Title */}
                  <h3 className="font-display text-lg text-bone">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mx-auto mt-3 max-w-[220px] font-body text-sm leading-relaxed text-bone/55 lg:mx-0">
                    {step.description}
                  </p>

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}