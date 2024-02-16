
import { AccordionProps } from "../intefaces/accordion.interface";
import { logoChrome, logoFirefox, logoOpera } from "./assets";

export const extensionData = [
    {
        img: logoChrome,
        extensionName:'Chrome',
        minimumVersion: 62,
    },
    {
        img: logoFirefox,
        extensionName:'Firefox',
        minimumVersion: 55,
    },
    {
        img: logoOpera,
        extensionName:'Opera',
        minimumVersion: 46,
    },
  ]
  
  export const faqs: AccordionProps[] = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
      isAccordionOpen: true
    },
    {
      question: "How can I request a new browser?",
      answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
      isAccordionOpen: false
    },
    {
      question: "Is there a mobile app?",
      answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed  sollicitudin ex et ultricies bibendum.",
      isAccordionOpen: false
    },
    {
      question: "What about other Chromium browsers?",
      answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
      isAccordionOpen: false
    }
  ];

  /*
  <!-- Question 1 -->
  

  <!-- Answer 1 -->
  

  <!-- Question 2 -->
  

  <!-- Answer 2 -->
  

  <!-- Question 3 -->
  

  <!-- Answer 3 -->
  

  <!-- Question 4 -->
  

  <!-- Answer 4 -->
  
  */

