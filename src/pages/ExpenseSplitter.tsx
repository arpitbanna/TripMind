import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Wallet, Plus, Users } from "lucide-react";
import { useState } from "react";

const ExpenseSplitter = () => {
  const [expenses] = useState([
    { id: 1, description: "Hotel Stay", payer: "Arpit", amount: 5000, split: 2 },
    { id: 2, description: "Dinner", payer: "Navo", amount: 1200, split: 2 },
    { id: 3, description: "Transport", payer: "Arpit", amount: 800, split: 2 },
    { id: 4, description: "Activities", payer: "Navo", amount: 2000, split: 2 },
  ]);

  const totalArpit = expenses.filter(e => e.payer === "Arpit").reduce((sum, e) => sum + e.amount, 0);
  const totalNavo = expenses.filter(e => e.payer === "Navo").reduce((sum, e) => sum + e.amount, 0);
  const total = totalArpit + totalNavo;
  const perPerson = total / 2;
  const settlement = totalArpit > totalNavo 
    ? `Navo owes Arpit ₹${((totalArpit - perPerson)).toFixed(0)}`
    : `Arpit owes Navo ₹${((totalNavo - perPerson)).toFixed(0)}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12 bg-gradient-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Expense Splitter</span>
            </h1>
            <p className="text-muted-foreground">Track and split travel expenses easily</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Add Expense Form */}
            <Card className="lg:col-span-1 shadow-soft animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-primary" />
                  Add Expense
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" placeholder="What did you pay for?" />
                </div>
                <div>
                  <Label htmlFor="amount">Amount (₹)</Label>
                  <Input id="amount" type="number" placeholder="0" />
                </div>
                <div>
                  <Label htmlFor="payer">Paid By</Label>
                  <Input id="payer" placeholder="Name" />
                </div>
                <div>
                  <Label htmlFor="split">Split Between</Label>
                  <Input id="split" type="number" placeholder="2" />
                </div>
                <Button className="w-full bg-gradient-hero">
                  Add Expense
                </Button>
              </CardContent>
            </Card>

            {/* Expenses Table */}
            <Card className="lg:col-span-2 shadow-soft animate-slide-up" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-primary" />
                  Expense History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Description</TableHead>
                      <TableHead>Paid By</TableHead>
                      <TableHead>Split</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {expenses.map((expense) => (
                      <TableRow key={expense.id}>
                        <TableCell className="font-medium">{expense.description}</TableCell>
                        <TableCell>{expense.payer}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {expense.split}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">₹{expense.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Summary */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <Card className="shadow-soft animate-scale-in">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">₹{total}</div>
                <p className="text-sm text-muted-foreground">Total Expenses</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft animate-scale-in" style={{ animationDelay: "100ms" }}>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">₹{perPerson.toFixed(0)}</div>
                <p className="text-sm text-muted-foreground">Per Person</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft animate-scale-in" style={{ animationDelay: "200ms" }}>
              <CardContent className="p-6 text-center">
                <div className="text-lg font-semibold mb-2">{settlement}</div>
                <p className="text-sm text-muted-foreground">Settlement</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExpenseSplitter;
