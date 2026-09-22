import { test, expect } from '../fixtures/auth.fixtures';

test("Add product to cart", async ({ loggedInUser }) => {

    await loggedInUser.click("#add-to-cart-sauce-labs-backpack");

    await loggedInUser.click(".shopping_cart_container");

});