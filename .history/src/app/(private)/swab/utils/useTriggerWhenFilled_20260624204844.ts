function useTriggerWhenFilled(
    watchValue: string | undefined,
    field: keyof UpdateSwabType,
    trigger: UseFormTrigger<UpdateSwabType>
) {
    useEffect(() => {
        if (watchValue?.trim()) {
            trigger(field)
        }
    }, [watchValue, field, trigger])
}