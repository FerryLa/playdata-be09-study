package com.brewfy.seleniumcrwaler.util;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

// 3
public class NaverNewsListCrawler {

    public static void main(String[] args) {

        WebDriver driver = new ChromeDriver();

        try {
            driver.get("https://www.naver.com");
            WebElement searchBox = driver.findElement(By.id("query"));
            searchBox.sendKeys("지하철");
            searchBox.submit();

            // 명시적 대기: 뉴스 탭이 나타날 때까지
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            WebElement newsTab = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("뉴스")));
            newsTab.click();

            // 뉴스 기사 목록이 로딩될 때까지 대기
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".sds-comps-vertical-layout.sds-comps-full-layout")));

            // 여러 뉴스 기사 제목 요소를 모두 찾음
            List<WebElement> newsTitles = driver.findElements(By.cssSelector(".sds-comps-text.sds-comps-text-ellipsis.sds-comps-text-ellipsis-1.sds-comps-text-type-headline1"));

            // 반복문으로 제목 출력
            for (WebElement title : newsTitles) {
                System.out.println(title.getText());
            }

        } finally {
            driver.quit();
        }
    }
}
