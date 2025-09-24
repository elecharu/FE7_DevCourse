{
    enum OPTION {
        OPTION_ONE = "Option 1",
        OPTION_TWO = "Option 2",
        OPTION_THREE = "Option 3",
    }

    const options = Object.values(OPTION).map((label, value) => ({
        label: label,
        value,
    }))

    console.log(options)
}

{
    const enum Status {
        Pending = "PENDING",
        Success = "SUCCESS",
        Fail = "FAIL",
    }
    console.log(Status.Success)
}
{
    const Status = {
        Pending: "PENDING",
        Success: "SUCCESS",
        Fail: "FAIL",
    } as const;

    type Status = (typeof Status)[keyof typeof Status];
    const status = Object.values(Status).map((label, value) => ({
        label: label,
        value,
    }))
    console.log(status)
}