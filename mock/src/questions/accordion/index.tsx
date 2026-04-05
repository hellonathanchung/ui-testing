import Accordion from "./Accordion";
import type { AccordionContent } from "./types";

export default function Solution() {
  // accepts items props
  // default index prop
  //onchange callback prop

  // key requirementsz

  //component manages its own state
  // each title is clickable and toggles the visibility of its content

  const mockContent: AccordionContent[] = [
    { title: "Item 1", description: "Description for item 1", id: "1" },
    { title: "Item 2", description: "Description for item 2", id: "2" },
    { title: "Item 3", description: "Description for item 3", id: "3" },
    { title: "Item 4", description: "Description for item 4", id: "4" },
  ];
  return (
    <div>
      <h3>Independent Accordion Component</h3>
      <Accordion items={mockContent} allowMultipleOpenItems />
    </div>
  );
}
