import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "../app/page";

describe("Home page",()=>{
    it("renders welcome test",()=>{
    render(<Home/>);
    const heading = screen.getByText("Welcome to Users");
    expect(heading).toBeInTheDocument();  

    });
    
    it("link Go to User exists test",()=>{
        render(<Home/>);
        const linkText = screen.getByText("Go to Users");
        expect(linkText).toBeInTheDocument();
    });
    it("link has href test", ()=>{
        render(<Home/>);
        const link= screen.getByRole("link",{name:"Go to Users"});
        expect(link).toHaveAttribute("href","/users");

    });


});
