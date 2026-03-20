import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserDetails from '../app/users/[id]/page';
import * as userService from '@/lib/getUsersDetails';

jest.mock('@/lib/getUsersDetails',()=>({
  __esModule: true,
  ...jest.requireActual('@/lib/GetUsersDetails'),
  getUsersDetailsById: jest.fn(),
}));

import  getUsersDetailsById  from '@/lib/getUsersDetails';

const mockdata = { id: 1, name: 'Anusha Kanakaraj', email: 'anusha.kanakaraj@cesltd.com', status: true };
const getUsersDetailsByIdRender = async () =>{
    (userService.getUsersDetailsById as jest.Mock).mockResolvedValueOnce(mockdata);
    const paramsPromise  = Promise.resolve({id:'1'})
    const ui = await UserDetails({params: paramsPromise});
    render(ui);
};
describe("User Data Page", ()=>{
    beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders status button",async ()=>{
    await getUsersDetailsByIdRender();
    const button = await screen.getByRole('button');
    expect(button).toBeInTheDocument();
    const statusButton = await screen.findByRole('button',{name: mockdata.status?'Active':'InActive'});
    expect(statusButton).toBeInTheDocument();

    fireEvent.click(await statusButton);
    const toggledStatus = mockdata.status? 'InActive':'Active';
    expect(await screen.findByRole('button',{name: toggledStatus})).toBeInTheDocument();

    });


});
