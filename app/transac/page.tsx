import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { addTransaction } from '../actions/addTransaction';

interface ExpenseFormData {
    description: string;
    amount: number;
}

const page = async () => {
    const user = await currentUser()

    if (!user) {
        return <div>Loading...</div>
    }

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     const formData = new FormData(e.currentTarget)
    //     const data: ExpenseFormData = {
    //         description: formData.get('description') as string,
    //         amount: parseFloat(formData.get('amount') as string)
    //     }
    //     // Handle form submission logic here
    //     console.log(data)
    // }

    const handleSubmit = async (formData: FormData) => {

        const result = await addTransaction(formData)
        console.log(result)
        if (result.error) {
            alert(result.error)

        }
        else {
            alert('Expense added successfully')
        }



    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Add New Expense</h1>
            <form
                action
                ={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Description
                        <span className="block text-gray-500 text-xs">
                            Enter what the expense was for
                        </span>
                    </label>
                    <input
                        type="text"
                        name="description"
                        required
                        className="w-full p-2 border rounded"
                        placeholder="Enter expense description"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        Amount
                        <span className="block text-gray-500 text-xs">
                            Enter the expense amount in dollars
                        </span>
                    </label>
                    <input
                        type="number"
                        name="amount"
                        step="0.01"
                        min="0"
                        required
                        className="w-full p-2 border rounded"
                        placeholder="0.00"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Add Expense
                </button>
            </form>
        </div>
    )
}

export default page