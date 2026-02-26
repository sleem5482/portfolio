import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Next.js includes react/no-unescaped-entities which flags common apostrophes in JSX.
      // It's often easier to either escape or just turn it off globally if it becomes noisy.
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default eslintConfig;
