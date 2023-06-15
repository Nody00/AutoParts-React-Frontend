import { Button, Heading } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Flex,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
const AddProduct = () => {
  const [formType, setFormType] = useState("engine");
  const formTypeRef = useRef();

  // DO VALIDATION

  function formTypeHandler() {
    const type = formTypeRef.current.value;
    console.log(type);
    if (type === "") {
      setFormType("engine");
      return;
    }
    setFormType(type);
  }

  return (
    <Box
      marginTop={0}
      marginBottom={10}
      mr={"auto"}
      ml={"auto"}
      maxWidth={"1100px"}
      display={"flex"}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex
        w={"50%"}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={5}
      >
        <Heading>Add product</Heading>

        <FormControl>
          <FormLabel>Product category</FormLabel>
          <Select
            placeholder="Select type"
            ref={formTypeRef}
            onChange={formTypeHandler}
          >
            <option value="engine">Engine</option>
            <option value="brakes">Brakes</option>
            <option value="cooling">Cooling</option>
            <option value="suspension">Suspension</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Product title</FormLabel>
          <Input type="text" maxLength={20}></Input>
        </FormControl>

        <FormControl>
          <FormLabel>Price</FormLabel>
          <NumberInput defaultValue={1} min={1} max={10000}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        {formType === "suspension" && (
          <FormControl>
            <FormLabel>Travel in mm</FormLabel>
            <NumberInput defaultValue={100} min={50} max={1000}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        )}

        {formType === "suspension" && (
          <FormControl>
            <FormLabel>Material used(e.g aluminum,steel,carbon)</FormLabel>
            <Input type="text"></Input>
          </FormControl>
        )}

        {formType === "cooling" && (
          <FormControl>
            <FormLabel>Max power in HP</FormLabel>
            <Input type="text"></Input>
          </FormControl>
        )}

        {formType === "brakes" && (
          <FormControl>
            <FormLabel>Size in mm</FormLabel>
            <NumberInput defaultValue={100} min={50} max={1000}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        )}

        {formType === "brakes" && (
          <FormControl>
            <FormLabel>Material</FormLabel>
            <Input type="text"></Input>
          </FormControl>
        )}

        {formType === "engine" && (
          <FormControl>
            <FormLabel>Number of cilinders</FormLabel>
            <NumberInput defaultValue={4} min={1} max={24}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        )}

        {formType === "engine" && (
          <FormControl>
            <FormLabel>Engine Capacity in Liters</FormLabel>
            <NumberInput
              defaultValue={4}
              min={1}
              max={24}
              precision={2}
              step={0.2}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        )}

        {formType === "engine" && (
          <FormControl>
            <FormLabel>Engine power in HP</FormLabel>
            <NumberInput defaultValue={1} min={1} max={1000}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        )}

        {formType === "engine" && (
          <FormControl>
            <FormLabel>Engine oil</FormLabel>
            <Input type="text" maxLength={10}></Input>
          </FormControl>
        )}

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input type="text" maxLength={200}></Input>
        </FormControl>

        {formType === "engine" && (
          <FormControl>
            <FormLabel>Miles</FormLabel>
            <Input type="text"></Input>
          </FormControl>
        )}

        <FormControl>
          <FormLabel>Image Url</FormLabel>
          <Input type="text"></Input>
        </FormControl>
        <Button colorScheme="red">Submit</Button>
      </Flex>
    </Box>
  );
};

export default AddProduct;
