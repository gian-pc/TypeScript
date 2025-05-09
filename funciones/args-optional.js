"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "No last name"}`;
    };
    const name = fullName("Gian");
    console.log({ name });
})();
