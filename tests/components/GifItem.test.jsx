import { render, screen } from '@testing-library/react'
import { GifItem } from "../../src/components/GifItem";


describe('Las pruebas en el componente <GifItem />', () => {
    const title = "OverWatch"
    const url = "https://www.google.com/"
    // Prueba snapshot con GifItem
    test('Hacer un snapshot con el GifItem debe hacer el match con el snapshot', () => {
        const { container } = render (<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    });

    // prueba de debe mostrar la Imagen con el URL y el ALT indicado

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifItem title={ title } url={ url } /> );

        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
        
    });

    // Prueba de debe de mostrar el titulo en el componente

    test('debe de mostrar el titulo en el componente', () => {
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText(title) ).toBeTruthy();
    });

});