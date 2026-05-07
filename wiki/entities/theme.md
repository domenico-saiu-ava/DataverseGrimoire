---
logical: "theme"
display: "Theme"
entitySetName: "themes"
primaryId: "themeid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Theme

Information that's used to set custom visual theme options for client applications.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `theme` |
| Display name | Theme |
| Display (plural) | Themes |
| Schema name | `Theme` |
| Entity set (Web API) | `themes` |
| Primary id attribute | `themeid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/themes?$select=name&$top=10
GET /api/data/v9.2/themes(<guid>)
POST /api/data/v9.2/themes
PATCH /api/data/v9.2/themes(<guid>)
DELETE /api/data/v9.2/themes(<guid>)
```

## Attributes

Writable: **28** · Read-only: **10**

### Writable

`AccentColor`, `BackgroundColor`, `ControlBorder`, `ControlShade`, `DefaultCustomEntityColor`, `DefaultEntityColor`, `GlobalLinkColor`, `HeaderColor`, `HoverLinkEffect`, `ImportSequenceNumber`, `IsDefaultTheme`, `LogoId`, `LogoToolTip`, `MainColor`, `Name`, `NavBarBackgroundColor`, `NavBarShelfColor`, `OverriddenCreatedOn`, `PageHeaderBackgroundColor`, `PanelHeaderBackgroundColor`, `ProcessControlColor`, `SelectedLinkEffect`, `statuscode`, `ThemeId`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `Type`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `statecode`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_theme_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_theme_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_theme_logoid` | [webresource](webresource.md) | `logoid` | `logoimage` |
| `lk_theme_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_theme_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_theme` | [organization](organization.md) | `organizationid` | `organizationid` |
| `TransactionCurrency_Theme` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `theme_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `theme_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `theme_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [theme.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/theme.md) on 2026-05-06.