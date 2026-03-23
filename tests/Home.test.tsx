import { render, screen  } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "../app/page";
import {useRouter} from 'next/navigation';
import userEvent from "@testing-library/user-event";


// jest.mock("next/navigation", () => ({
//   useRouter: jest.fn(),
// }));
// const mockedUseRouter = useRouter as jest.Mock;
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
    // it("Go to Users Navigation",async ()=>{
    //     render(<Home/>);
    //     const pushMock = jest.fn();
    //     mockedUseRouter.mockReturnValue({ push: pushMock });
    //     const link= screen.getByRole("link",{name:"Go to Users"});
    //     const user = userEvent.setup();

    //     await user.click(screen.getByRole("link", { name: 'Go to Users' }));

    //     expect(pushMock).toHaveBeenCalledWith("/users");

    // })


});
