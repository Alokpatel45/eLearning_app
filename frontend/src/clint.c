#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <winsock2.h>
#include <ws2tcpip.h>
int main()
{
    struct sockaddr_in addr;
    int sockid;
    int len = sizeof(addr);
    sockid = socket(AF_INET, SOCK_DGRAM, 0);
    if (sockid < 0)
    {
        perror("socket failed");
        exit(1);
    }
    addr.sin_family = AF_INET;
    addr.sin_port = htons(8080);
    addr.sin_addr.s_addr = inet_addr("127.0.0.1");
    char *message = "Hello from UDP client";
    sendto(sockid, message, strlen(message), 0,
           (const struct sockaddr *)&addr, sizeof(addr));
    printf("Message sent to %s:%d\n", "127.0.0.1", 8080);
    close(sockid);
    return 0;
}