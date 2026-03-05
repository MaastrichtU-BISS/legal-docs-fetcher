import { LegalDocument, LegalDocumentNetwork, LegalDocumentQuery, LegalDocsClientConfig } from "../types";
import axios, { AxiosInstance } from "axios";

export class LegalDocsClient {
  private client: AxiosInstance;
  private config: LegalDocsClientConfig;

  constructor(config: LegalDocsClientConfig) {
    this.config = {
      timeout: 30000,
      ...config,
    };

    this.client = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout,
      headers: {
        "Content-Type": "application/json",
        ...this.config.headers,
      },
    });

    // Add request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // You can add custom logic here (e.g., logging, authentication)
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    // Add response interceptor
    this.client.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // Handle errors globally
        const errorMessage =
          error.response?.data?.message || error.message || "An error occurred";
        return Promise.reject(new Error(errorMessage));
      },
    );
  }

  /**
   * Fetch legal documents based on query parameters
   */
  async fetchDocuments(query: LegalDocumentQuery): Promise<LegalDocument[]> {
    try {
      const response = await this.client.post<LegalDocumentNetwork>(
        "/network",
        {
          arguments: { ...query.query },

          endpoint: "api/network",
        },
      );
      return response.data.nodes;
    } catch (error: any) {
      throw new Error(`Failed to fetch documents: ${error.message}`);
    }
  }

  /**
   * Update the API key
   */
  setApiKey(apiKey: string): void {
    this.client.defaults.headers.common["Authorization"] = `Bearer ${apiKey}`;
  }

  /**
   * Set custom headers
   */
  setHeaders(headers: Record<string, string>): void {
    Object.assign(this.client.defaults.headers.common, headers);
  }
}

/**
 * Factory function to create a new client instance
 */
export function createLegalDocsClient(
  config: LegalDocsClientConfig,
): LegalDocsClient {
  return new LegalDocsClient(config);
}
