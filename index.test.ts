import { Decentro } from "./index";

describe("Collections", () => {
  const decentro = new Decentro({
    basePath: "https://in.staging.decentro.tech/sim",
    client_id: process.env.DECENTRO_CLIENT_ID,
    client_secret: process.env.DECENTRO_CLIENT_SECRET,
    module_secret: process.env.DECENTRO_COLLECTIONS_MODULE_SECRET,
    provider_secret: process.env.DECENTRO_COLLECTIONS_PROVIDER_SECRET,
  });
  const accountNumber = process.env.DECENTRO_COLLECTIONS_TEST_ACCOUNT_NUMBER;
  if (accountNumber === undefined)
    throw Error(
      "DECENTRO_COLLECTIONS_TEST_ACCOUNT_NUMBER not set in environemnt"
    );
  const purposeMessage = "Testing TypeScript SDK - Konfig";
  it("generatePaymentLink", async () => {
    const response = await decentro.collections.generatePaymentLink({
      reference_id: "123456789014",
      payee_account: accountNumber,
      amount: 10,
      purpose_message: purposeMessage,
      generate_qr: 6,
      expiry_time: 10,
    });
    expect(response).not.toBeNull();
  });
});
