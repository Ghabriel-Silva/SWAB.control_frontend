import { Field, HStack, Textarea } from "@chakra-ui/react"


export const ObeservationText = () => {
    return (
        <HStack gap="10" width="full">
            <Field.Root required>
                <Textarea placeholder="Oberservação..." variant="outline" />
                <Field.HelperText>Max 500 characteres.</Field.HelperText>
            </Field.Root>
        </HStack>
    )
}
