import React from "react";
import Container from "./container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className='text-lg'>What services does the career guidance website provide?</AccordionTrigger>
            <AccordionContent>
              The website offers personalized career guidance, helping users explore suitable career options, providing comprehensive information on job roles, growth prospects, and offering efficient planning tools.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className='text-lg'>Is there a cost associated fot the career guidance?
            </AccordionTrigger>
            <AccordionContent>
              No, accessing the core career resources and guidance on the website is completely free of cost.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className='text-lg'>How can the website help me explore different career paths?</AccordionTrigger>
            <AccordionContent>
              The website provides detailed information on various career paths, helping users explore options based on their interests, skills, and growth prospects.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className='text-lg'>Is the website suitable for individuals at different stages of their careers?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely, the website caters to individuals at various career stages, offering guidance for career exploration, planning, and advancement.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Is this template completely free to use?",
    answer: "Yes, this template is completely free to use.",
  },
  {
    question: "Can I use it in a commercial project?",
    answer: "Yes, this you can.",
  },
  {
    question: "What is your refund policy? ",
    answer:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
];

export default Faq;