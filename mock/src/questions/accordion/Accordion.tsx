import { useState } from "react";
import type { AccordionContent } from "./types";

interface Props {
  items: AccordionContent[];
  allowMultipleOpenItems?: boolean;
  defaultOpenIds?: string[];
}
export default function Accordion({
  items,
  defaultOpenIds,
  allowMultipleOpenItems,
}: Props) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(defaultOpenIds));

  function toggleItem(itemId: string) {
    setOpenIds((prevOpenIds) => {
      const newSet = new Set(prevOpenIds);

      if (allowMultipleOpenItems) {
        if (newSet.has(itemId)) {
          newSet.delete(itemId);
        } else {
          newSet.add(itemId);
        }
      } else if (newSet.has(itemId)) {
        newSet.clear();
      } else {
        newSet.clear();
        newSet.add(itemId);
      }

      return newSet;
    });

    // allow multiple, just add the id or remove it from the set
    // if allow multiple is off, we can clear it and just add the new id
  }
  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIds.has(item.id);

        return (
          <div key={item.id ?? index} style={{ marginBottom: "8px" }}>
            <button
              onClick={() => toggleItem(item.id)}
              style={{
                display: "flex",
                justifyContent: "space-between",

                alignItems: "center",
                width: "100%",
              }}
            >
              <h3>{item.title}</h3>
              <span>{isOpen ? "-" : "+"}</span>
            </button>
            <p
              style={{
                overflow: "hidden",
                maxHeight: isOpen ? "160px" : "0px",
                padding: isOpen ? "16px" : "0px",
                transition: "all 0.3s ease-in-out",
              }}
            >
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
