import { Provider as ChakraProvider } from "@/components/ui/provider";

type Props = { children: React.ReactNode}

export default function Providers({ children }: Props) {
  return (<ChakraProvider>
        {children}
  </ChakraProvider>);
}
