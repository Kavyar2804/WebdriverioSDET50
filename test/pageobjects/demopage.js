class Homepage
{

openurl()
{
    return browser.url("https://webdriver.io/")
}

get searchbtn()
{
    return $("//span[@class='DocSearch-Button-Placeholder']")
}
get searchtf()
{
    return $("//input[@class='DocSearch-Input']")
}

async performclick(data)
{

    await this.searchbtn.click()
    await this.searchtf.setValue(data)
}

}
export default new Homepage()