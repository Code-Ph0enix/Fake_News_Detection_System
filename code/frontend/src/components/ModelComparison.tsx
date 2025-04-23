import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';

const modelPerformanceData = [
  { name: 'Day 1', LogisticRegression: 94, NaiveBayes: 90, RandomForest: 98, GradientBoosting: 95 },
  { name: 'Day 2', LogisticRegression: 95, NaiveBayes: 91, RandomForest: 99, GradientBoosting: 96 },
  { name: 'Day 3', LogisticRegression: 96, NaiveBayes: 92, RandomForest: 99, GradientBoosting: 97 },
  { name: 'Day 4', LogisticRegression: 97, NaiveBayes: 93, RandomForest: 100, GradientBoosting: 98 },
  { name: 'Day 5', LogisticRegression: 99, NaiveBayes: 94 , RandomForest: 100, GradientBoosting: 99 },
];

const modelMetrics = [
  // { name: 'Accuracy', LogisticRegression: 93, NaiveBayes: 92, RandomForest: 98, GradientBoosting: 99 },
  { name: 'Precision', LogisticRegression: 93, NaiveBayes: 92, RandomForest: 98, GradientBoosting: 94 },
  { name: 'Recall', LogisticRegression: 94, NaiveBayes: 93, RandomForest: 98, GradientBoosting: 95 },
  { name: 'F1 Score', LogisticRegression: 94, NaiveBayes: 92, RandomForest: 98, GradientBoosting: 95 },
];

const modelDescriptions = {
  LogisticRegression: "A statistical model that predicts binary outcomes. It's effective for text classification due to its simplicity and interpretability.",
  NaiveBayes: "A probabilistic classifier based on Bayes' theorem. Particularly good for text classification tasks with its ability to handle high-dimensional data.",
  RandomForest: "An ensemble learning method that combines multiple decision trees. Excellent at capturing complex patterns and resistant to overfitting.",
  GradientBoosting: "An advanced ensemble method that builds trees sequentially. Known for high accuracy and robust performance across different datasets."
};

const metricDescriptions = {
  Accuracy: "The proportion of correct predictions (both true positives and true negatives) among all predictions.",
  Precision: "The proportion of true positive predictions compared to all positive predictions. Shows how reliable positive predictions are.",
  Recall: "The proportion of actual positives correctly identified. Shows how well the model finds all positive cases.",
  "F1 Score": "The harmonic mean of precision and recall. Provides a balanced measure of the model's performance."
};

export function ModelComparison() {
  return (
    <div className="space-y-8">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-2">Model Performance Over Time</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Tracking accuracy improvements as models learn from new data
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={modelPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[88, 102]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="LogisticRegression" stroke="hsl(var(--chart-1))" strokeWidth={2} />
            <Line type="monotone" dataKey="NaiveBayes" stroke="hsl(var(--chart-2))" strokeWidth={2} />
            <Line type="monotone" dataKey="RandomForest" stroke="hsl(var(--chart-3))" strokeWidth={2} />
            <Line type="monotone" dataKey="GradientBoosting" stroke="hsl(var(--chart-4))" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-2">Model Metrics Comparison</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Comparing different performance metrics across all models
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={modelMetrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[85, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="LogisticRegression" fill="hsl(var(--chart-1))" />
            <Bar dataKey="NaiveBayes" fill="hsl(var(--chart-2))" />
            <Bar dataKey="RandomForest" fill="hsl(var(--chart-3))" />
            <Bar dataKey="GradientBoosting" fill="hsl(var(--chart-4))" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Info className="h-5 w-5" />
            <h3 className="text-lg font-semibold">Model Descriptions</h3>
          </div>
          <div className="space-y-4">
            {Object.entries(modelDescriptions).map(([model, description]) => (
              <div key={model}>
                <h4 className="font-medium mb-1">{model}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Info className="h-5 w-5" />
            <h3 className="text-lg font-semibold">Metric Explanations</h3>
          </div>
          <div className="space-y-4">
            {Object.entries(metricDescriptions).map(([metric, description]) => (
              <div key={metric}>
                <h4 className="font-medium mb-1">{metric}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}