import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Card";

/* eslint-disable react/display-name, @typescript-eslint/no-explicit-any */
jest.mock("next/link", () => {
  return ({ href, children, className }: any) => (
    <a href={href} className={className}>
      {children}
    </a>
  );
});

jest.mock("next/image", () => {
  return (props: any) => <img {...props} />;
});
/* eslint-enable react/display-name, @typescript-eslint/no-explicit-any */

describe("Card component", () => {
  const mockProps = {
    href: "/rotate-matrix",
    imageUrl: "/img/test.png",
    title: "Título X",
    description: "Descripción X"
  };

  it("should render correctly", () => {
    render(<Card {...mockProps} />);

    expect(screen.getByRole("heading", { name: mockProps.title })).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it("should render with alt and src correctly", () => {
    render(<Card {...mockProps} />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", mockProps.imageUrl);
    expect(img).toHaveAttribute("alt", mockProps.title);
  });

  it("should contain the correct href", () => {
    render(<Card {...mockProps} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", mockProps.href);
  });

  it("should apply the correct class names", () => {
    render(<Card {...mockProps} />);

    const link = screen.getByRole("link");
    expect(link).toHaveClass("bg-white");
    expect(link).toHaveClass("rounded-lg");
    expect(link).toHaveClass("hover:scale-105");
  });
});