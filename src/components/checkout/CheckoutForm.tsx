import { Form } from "react-router-dom";
import useInput from "../../hooks/use-input";
import { Col, Row } from "react-bootstrap";
import MyFormInput2 from "../formComponents/MyFormInput2";

const CheckoutForm = () => {
  const {
    value: enteredAdress1,
    isValid: enteredAdress1IsValid,
    hasError: adress1InputHasError,
    valueChangeHandler: adress1ChangeHandler,
    inputBlurHanlder: adress1BlurHandler,
    reset: resetAdress1Input,
  } = useInput((value: any) => value.trim().length !== 0);

  const {
    value: enteredAdress2,
    isValid: enteredAdress2IsValid,
    hasError: adress2InputHasError,
    valueChangeHandler: adress2ChangeHandler,
    inputBlurHanlder: adress2BlurHandler,
    reset: resetAdress2Input,
  } = useInput((value: any) => value.trim().length !== 0);

  const {
    value: enteredCountry,
    isValid: enteredCountryIsValid,
    hasError: countryInputHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHanlder: countryBlurHandler,
    reset: resetCountryInput,
  } = useInput((value: any) => value.trim().length !== 0);

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHanlder: cityBlurHandler,
    reset: resetCityInput,
  } = useInput((value: any) => value.trim().length !== 0);
  const {
    value: enteredMobile,
    isValid: enteredMobileIsValid,
    hasError: mobileInputHasError,
    valueChangeHandler: mobileChangeHandler,
    inputBlurHanlder: mobileBlurHandler,
    reset: resetMobileInput,
  } = useInput((value: any) => value.trim().length > 9);

  const {
    value: enteredZipCode,
    isValid: enteredZipCodeIsValid,
    hasError: zipCodeInputHasError,
    valueChangeHandler: zipCodeChangeHandler,
    inputBlurHanlder: zipCodeBlurHandler,
    reset: resetZipCodeInput,
  } = useInput((value: any) => value.trim().length > 2);

  const adress1Class = adress1InputHasError
    ? "border border-danger bg-red-200 py-2 px-3"
    : "border py-2 px-3";
  const adress2Class = adress2InputHasError
    ? "border border-danger bg-red-200 py-2 px-3"
    : "border py-2 px-3";
  const countryClass = countryInputHasError
    ? "border border-danger bg-red-200 py-2 px-3"
    : "border py-2 px-3";
  const cityClass = cityInputHasError
    ? "border border-danger bg-red-200 py-2 px-3"
    : "border py-2 px-3";
  const mobileClass = mobileInputHasError
    ? "border border-danger bg-red-200 py-2 px-3"
    : "border py-2 px-3";
  const zipCodeClass = zipCodeInputHasError
    ? "border border-danger bg-red-200 py-2 px-3"
    : "border py-2 px-3";

  return (
    <div className="flex flex-col items-center xl:items-start ">
      <h3 className="mb-8 font-bold  ">Billing Adress</h3>
      <Form className=" gap-y-4 w-5/6">
        <Row>
          <Col>
            <MyFormInput2
              type="text"
              id="adress1"
              label="Address Line 1"
              class={adress1Class}
              value={enteredAdress1}
              onChange={adress1ChangeHandler}
              onBlur={adress1BlurHandler}
              errorText=" Adress line 1 is required"
              hasError={adress1InputHasError}
              placeholder="123 street"
            />
          </Col>
          <Col>
            <MyFormInput2
              type="text"
              id="adress2"
              label="Address Line 2"
              class={adress2Class}
              value={enteredAdress2}
              onChange={adress2ChangeHandler}
              onBlur={adress2BlurHandler}
              errorText=" Adress line 2 is required"
              hasError={adress2InputHasError}
              placeholder="123 street"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <MyFormInput2
              type="text"
              id="country"
              label="Country"
              class={countryClass}
              value={enteredCountry}
              onChange={countryChangeHandler}
              onBlur={countryBlurHandler}
              errorText=" Country is required"
              hasError={countryInputHasError}
              placeholder="Egypt"
            />
          </Col>
          <Col>
            <MyFormInput2
              type="text"
              id="City"
              label="City"
              class={cityClass}
              value={enteredCity}
              onChange={cityChangeHandler}
              onBlur={cityBlurHandler}
              errorText=" City is required"
              hasError={cityInputHasError}
              placeholder="Cairo"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <MyFormInput2
              type="number"
              id="mobile"
              label="mobile"
              class={mobileClass}
              value={enteredMobile}
              onChange={mobileChangeHandler}
              onBlur={mobileBlurHandler}
              errorText="Enter a valid mobile number"
              hasError={countryInputHasError}
              placeholder="123456789"
            />
          </Col>
          <Col>
            <MyFormInput2
              type="number"
              id="zipCode"
              label="Zip Code"
              class={zipCodeClass}
              value={enteredZipCode}
              onChange={zipCodeChangeHandler}
              onBlur={zipCodeBlurHandler}
              errorText="Enter a valid Zip Code"
              hasError={zipCodeInputHasError}
              placeholder="123"
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CheckoutForm;