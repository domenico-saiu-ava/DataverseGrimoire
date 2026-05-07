---
logical: "provisionlanguageforuser"
display: "ProvisionLanguageForUser"
entitySetName: "provisionlanguageforusers"
primaryId: "provisionlanguageforuserid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# ProvisionLanguageForUser

## Identity

| Property | Value |
| --- | --- |
| Logical name | `provisionlanguageforuser` |
| Display name | ProvisionLanguageForUser |
| Display (plural) | ProvisionLanguageForUser |
| Schema name | `ProvisionLanguageForUser` |
| Entity set (Web API) | `provisionlanguageforusers` |
| Primary id attribute | `provisionlanguageforuserid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/provisionlanguageforusers?$select=name&$top=10
GET /api/data/v9.2/provisionlanguageforusers(<guid>)
POST /api/data/v9.2/provisionlanguageforusers
PATCH /api/data/v9.2/provisionlanguageforusers(<guid>)
DELETE /api/data/v9.2/provisionlanguageforusers(<guid>)
```

## Attributes

Writable: **6** · Read-only: **0**

### Writable

`AsyncOperationId`, `Lcid`, `Name`, `OperationStatus`, `ProvisionLanguageForUserId`, `UserId`

## Relationships


### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `provisionlanguageforuser_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `provisionlanguageforuser_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `provisionlanguageforuser_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `provisionlanguageforuser_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `provisionlanguageforuser_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `provisionlanguageforuser_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [provisionlanguageforuser.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/provisionlanguageforuser.md) on 2026-05-06.