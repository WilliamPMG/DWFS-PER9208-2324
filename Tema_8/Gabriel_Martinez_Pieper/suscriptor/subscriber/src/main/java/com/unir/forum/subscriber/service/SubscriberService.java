package com.unir.forum.subscriber.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
@Slf4j
public class SubscriberService {

    private final JmsTemplate topicJmsTemplate;

    /**
     * Publica un mensaje en un topic.
     * @param topic - nombre del topic.
     * @param message - mensaje a enviar.
     */
    public void publishToTopic(String topic, String message){
        topicJmsTemplate.convertAndSend(topic, message);
    }

    /**
     * Escucha los mensajes que llegan a una cola.
     * @param message - mensaje recibido.
     */
    @JmsListener( destination = "${forum.userId}")
    public void listenDirectMessage(String message) {
        log.info("Se ha recibido un mensaje privado: " + message);
    }

    @JmsListener(destination = "tema1", containerFactory = "topicJmsListenerContainerFactory")
    public void listenForumMessage1(String message) {
        log.info("Se ha recibido un mensaje del tema 1: " + message);
    }

    @JmsListener(destination = "tema2", containerFactory = "topicJmsListenerContainerFactory")
    public void listenForumMessage2(String message) {
        log.info("Se ha recibido un mensaje del tema 2: " + message);
    }

    @JmsListener(destination = "tema3", containerFactory = "topicJmsListenerContainerFactory")
    public void listenForumMessage3(String message) {
        log.info("Se ha recibido un mensaje del tema 3: " + message);
    }

    @JmsListener(destination = "tema4", containerFactory = "topicJmsListenerContainerFactory")
    public void listenForumMessage4(String message) {
        log.info("Se ha recibido un mensaje del tema 4: " + message);
    }


}
