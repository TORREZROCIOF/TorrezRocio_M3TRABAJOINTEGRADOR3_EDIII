import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductPage } from "./";


describe("Product-page", () => {   
    beforeEach(() => {render(<ProductPage />);});
    it('must display a title', () => {
        expect(screen.getByText(/product page/i)).toBeInTheDocument();
    });

    it('must display the product name CARRITO', () => {
        expect(screen.getByText(/carrito/i)).toBeInTheDocument();
    });
});