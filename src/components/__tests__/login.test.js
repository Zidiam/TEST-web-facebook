import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import LoginButton from '../loginButton';
afterEach(() =>{
    cleanup();
});

test('should render Login Button', () => {
    render(<LoginButton/>);
    const loginElement = screen.getByTestId('login-button');
    expect(loginElement).toBeInTheDocument();
    expect(loginElement).toHaveTextContent('Login');
    //expect(loginElement).not.toContainHTML('strike');
});

test('matches snapshot', () =>{
    const tree = renderer.create(<LoginButton/>).toJSON();
    expect(tree).toMatchSnapshot();
});