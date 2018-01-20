import {HttpMessage, Request, Headers, Method} from "./HttpMessage";

export class InMemoryRequest implements Request {

    uri: string;
    method: string;
    headers: Headers;
    body: string;

    constructor(method: Method, uri: string) {
        this.method = method.toString();
        this.uri = uri;
        return this;
    }

    setUri(uri: string): HttpMessage {
        return undefined;
    }

    getHeader(name: string): string {
        return undefined;
    }

    setHeader(name: string, value: string): HttpMessage {
        return undefined;
    }

    allHeaders(headers: Headers): HttpMessage {
        return undefined;
    }

    replaceHeader(name: string, value: string): HttpMessage {
        return undefined;
    }

    removeHeader(name: string): HttpMessage {
        return undefined;
    }

    setBody(body: string): HttpMessage {
        this.body = body;
        return this;
    }

    setBodystring(body: string): HttpMessage {
        return undefined;
    }

    headerValues(name: string): string[] {
        return undefined;
    }

    bodystring(): string {
        return undefined;
    }

}
