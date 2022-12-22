import React from "react";
import { describe, expect, test } from "@jest/globals";
import { usePassport, PassportProvider } from "../src/lib";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

describe("usePassport tests", () => {
  test("sum", () => {
    render(
      <PassportProvider>
        <div></div>
      </PassportProvider>
    );
    expect(1 + 2).toBe(3);
  });
});
