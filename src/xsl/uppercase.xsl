<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output omit-xml-declaration="no" indent="yes"/>

    <xsl:mode on-no-match="shallow-copy"/>

    <xsl:template match="text()">
        <xsl:value-of select="upper-case(.)"/>
    </xsl:template>

</xsl:stylesheet>