import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UsersList from '../app/users/page';

jest.mock('@/lib/getUsersDetails', () => ({
  __esModule: true,
  default: jest.fn(),
}));

import getUsersDetails from '@/lib/getUsersDetails';

const mockData = [
  { id: 1, name: 'Anusha Kanakaraj', email: 'anusha.kanakaraj@cesltd.com' },
  { id: 2, name: 'Sushmitha', email: 'sushmitha@cesltd.com' },
];
const renderedPageWithData = async () => {
      (getUsersDetails as jest.Mock).mockResolvedValueOnce(mockData);
      render(await UsersList());
}


describe('User List Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetch user details and renders them', async () => {
    await renderedPageWithData(); // with rendered

    expect(getUsersDetails).toHaveBeenCalledTimes(1);
    expect(await screen.findByText(/Anusha Kanakaraj/)).toBeInTheDocument();
    expect(await screen.findByText(/Sushmitha/)).toBeInTheDocument();

    //dynamically testing data

    for (const user of mockData) {
      expect(await screen.findByText(user.name)).toBeInTheDocument();
    }
  });

  
  it("links exist with href", async()=>{
   await renderedPageWithData();
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
    
    const link1 = links[0];
    const link2 = links[1];

    expect(link1).toHaveAttribute('href',"users/1");
    expect(link2).toHaveAttribute('href',"users/2");
  });

  it("render link as per data",async ()=>{
   await renderedPageWithData();
   const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mockData.length);

   links.forEach((link,index)=>{
    expect(link).toHaveAttribute('href',`users/${mockData[index].id}`);
   });

  })

  it("render href for 1st user",async()=>{
    await renderedPageWithData();
    const firstLink = screen.getAllByRole('link')[0];
    expect(firstLink).toHaveAttribute('href',`users/${mockData[0].id}`);
  })

  it("link redirects to correct page",async ()=>{
    (getUsersDetails as jest.Mock).mockResolvedValueOnce([
      { id: 1, name: 'Anusha Kanakaraj', email: 'anusha.kanakaraj@cesltd.com' },
      { id: 2, name: 'Sushmitha', email: 'sushmitha@cesltd.com' },
    ]);
    render(await UsersList());
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
    const link1 = links[0];
    const link2 = links[1];

    expect(link1).toHaveAttribute('href',"users/1");
    expect(link2).toHaveAttribute('href',"users/2");
  })
  
  it('should handle network errors', async () => {
        (getUsersDetails as jest.Mock).mockRejectedValueOnce(new Error('HTTP error! status: 500'));

        await expect(getUsersDetails()).rejects.toThrow('HTTP error! status: 500');
    });

  
   
});