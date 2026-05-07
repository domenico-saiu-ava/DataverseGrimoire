---
logical: "provisionlanguageforuser"
display: "ProvisionLanguageForUser"
entitySetName: "provisionlanguageforusers"
primaryId: "provisionlanguageforuserid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **6** · Read-only: **1**

### Writable

`asyncoperationid`, `lcid`, `name`, `operationstatus`, `provisionlanguageforuserid`, `userid`

### Read-only

`organizationid`

## Relationships


### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `provisionlanguageforuser_SyncErrors` | [provisionlanguageforuser](provisionlanguageforuser.md) | `regardingobjectid` | `regardingobjectid_provisionlanguageforuser` |
| `provisionlanguageforuser_AsyncOperations` | [provisionlanguageforuser](provisionlanguageforuser.md) | `regardingobjectid` | `regardingobjectid_provisionlanguageforuser` |
| `provisionlanguageforuser_MailboxTrackingFolders` | [provisionlanguageforuser](provisionlanguageforuser.md) | `regardingobjectid` | `regardingobjectid_provisionlanguageforuser` |
| `provisionlanguageforuser_UserEntityInstanceDatas` | [provisionlanguageforuser](provisionlanguageforuser.md) | `objectid` | `objectid_provisionlanguageforuser` |
| `provisionlanguageforuser_ProcessSession` | [provisionlanguageforuser](provisionlanguageforuser.md) | `regardingobjectid` | `regardingobjectid_provisionlanguageforuser` |
| `provisionlanguageforuser_BulkDeleteFailures` | [provisionlanguageforuser](provisionlanguageforuser.md) | `regardingobjectid` | `regardingobjectid_provisionlanguageforuser` |
| `provisionlanguageforuser_PrincipalObjectAttributeAccesses` | [provisionlanguageforuser](provisionlanguageforuser.md) | `objectid` | `objectid_provisionlanguageforuser` |


## Source

Generated from [provisionlanguageforuser (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='provisionlanguageforuser')) on 2026-05-07.