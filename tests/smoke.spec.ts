import { test, expect } from "@playwright/test";

test("home loads and CTA visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Passion for AI")).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Jetzt starten/i }),
  ).toBeVisible();
});

test("products page lists CropCommander", async ({ page }) => {
  await page.goto("/produkte");
  await expect(page.getByText("CropCommander")).toBeVisible();
});

test("contact form validates", async ({ page }) => {
  await page.goto("/kontakt");
  await page.getByRole("button", { name: /Nachricht senden/i }).click();
  await expect(page.getByText(/Bitte alle Pflichtfelder/)).toBeVisible();
});
