import { useState } from "react";
import {
  Box,
  Button,
  HStack,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { TrashIcon } from "@heroicons/react/24/outline";

interface Field {
  quantity: string;
  price: string;
}

const Container: React.FC = () => {
  const [fields, setFields] = useState<Field[]>([{ quantity: "", price: "" }]);

  const addField = () => {
    setFields([...fields, { quantity: "", price: "" }]);
  };

  const handleFieldChange = (index: number, fieldName: keyof Field, value: string) => {
    const updatedFields = [...fields];
    updatedFields[index][fieldName] = value;
    setFields(updatedFields);
  };

  const onDeleteField = (index: number) => {
    // Ensure that at least one field remains in the list
    if (fields.length > 1) {
      const updatedFields = [...fields];
      updatedFields.splice(index, 1);
      setFields(updatedFields);
    }
  };

  const calculateAverage = () => {
    const totalQuantity = fields.reduce((acc, field) => acc + parseFloat(field.quantity), 0);
    const totalValue = fields.reduce((acc, field) => acc + parseFloat(field.quantity) * parseFloat(field.price), 0);
  
    if (totalQuantity !== 0) {
      const average = totalValue / totalQuantity;
      alert(`Average of stock: ${average.toFixed(2)}`);
    } else {
      alert("Total quantity is 0. Cannot calculate average.");
    }
  };
  

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControl>
        <FormLabel>Make Average of stock</FormLabel>
        {fields.map((field, index) => (
          <HStack key={index}>
            <Box sx={{ display: "flex", padding: "10px", gap: "5px" }}>
              <Input
                type="number"
                placeholder="Add quantity"
                value={field.quantity}
                onChange={(e) =>
                  handleFieldChange(index, "quantity", e.target.value)
                }
              />
              <Input
                type="number"
                placeholder="Add price"
                value={field.price}
                onChange={(e) =>
                  handleFieldChange(index, "price", e.target.value)
                }
              />
            </Box>
            {fields.length > 1 && (
              <Button onClick={() => onDeleteField(index)}><TrashIcon style={{width: '20px'}}/></Button>
            )}
          </HStack>
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onClick={addField}>Add another field</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Button
            sx={{
              bgColor: "blue",
              color: "white",
            }}
            onClick={calculateAverage}
          >
            Make Average
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default Container;
