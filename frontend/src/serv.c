#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <winsock2.h>
#include <ws2tcpip.h>
int main()
{
    int sockid;
    struct sockaddr_in servaddr, cliaddr;
    if (sockid = socket(AF_INET, SOCK_DGRAM, 0) < 0)
    {
        perror("error socket");
        exit(1);
    }
    servaddr.sin_family = AF_INET;
    servaddr.sin_addr.s_addr = INADDR_ANY;
    servaddr.sin_port = htons(8080);
    if (bind(sockid, (struct sockaddr *)&servaddr, sizeof(servaddr)) < 0)
    {
        perror("bind error");
        exit(1);
    }
    char buffer[1000];
    printf("UDP Server listening on port 8080...\n");
    socklen_t len = sizeof(cliaddr);
    int n = recvfrom(sockid, buffer, 1000, 0,
                     (struct sockaddr *)&cliaddr, &len);
    buffer[n] = '\0';
    printf("Received: %s\n", buffer);
    close(sockid);
    return 0;
}