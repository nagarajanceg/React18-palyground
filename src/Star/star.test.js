import {fireEvent, render, screen} from '@testing-library/react';
import StarRating from '.';
test('should render star component',()=>{
    render(<StarRating/>)
    screen.getByText("Delivery Rating");
});

test('check default FaStar icons', ()=>{
    render(<StarRating/>)
    expect(screen.getByLabelText('star-1')).toHaveStyle(`color:grey`);
    expect(screen.getByText('0/5'));
});

test('check star rating functionality', ()=>{
    render(<StarRating/>)
    expect(screen.getByLabelText('star-4')).toHaveStyle(`color:grey`);
    fireEvent.click(screen.getByLabelText('star-4'));
    expect(screen.getByLabelText('star-4')).toHaveStyle(`color:red`);
    expect(screen.getByLabelText('star-5')).toHaveStyle(`color:grey`);
    expect(screen.getByText('4/5'));
});