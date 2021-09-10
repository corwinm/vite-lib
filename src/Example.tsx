import React from "react";

interface ExampleProps {
  text: string;
}

export default function Example({ text }: ExampleProps) {
  return <>Example Component! {text}</>;
}
