import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "../app/page";

describe("Home page",()=>{
    test("renders welcome test",()=>{
    render(<Home/>);
    const heading = screen.getByText("Welcome to Users");
    expect(heading).toBeInTheDocument();

})

})
