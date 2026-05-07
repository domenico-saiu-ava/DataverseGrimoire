---
logical: "userrating"
display: "Valutazione utente"
entitySetName: "userratings"
primaryId: "userratingid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Valutazione utente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `userrating` |
| Display name | Valutazione utente |
| Display (plural) | Valutazioni utente |
| Schema name | `userrating` |
| Entity set (Web API) | `userratings` |
| Primary id attribute | `userratingid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/userratings?$select=name&$top=10
GET /api/data/v9.2/userratings(<guid>)
POST /api/data/v9.2/userratings
PATCH /api/data/v9.2/userratings(<guid>)
DELETE /api/data/v9.2/userratings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`appmoduleid`, `browser`, `comment`, `device`, `importsequencenumber`, `name`, `overriddencreatedon`, `score`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `userratingid`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_userrating_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_userrating_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_userrating_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_userrating_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_userrating` | [organization](organization.md) | `organizationid` | `organizationid` |
| `appmodule_userrating_app` | [appmodule](appmodule.md) | `appmoduleid` | `AppModuleId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `userrating_SyncErrors` | [userrating](userrating.md) | `regardingobjectid` | `regardingobjectid_userrating` |
| `userrating_DuplicateMatchingRecord` | [userrating](userrating.md) | `duplicaterecordid` | `duplicaterecordid_userrating` |
| `userrating_DuplicateBaseRecord` | [userrating](userrating.md) | `baserecordid` | `baserecordid_userrating` |
| `userrating_AsyncOperations` | [userrating](userrating.md) | `regardingobjectid` | `regardingobjectid_userrating` |
| `userrating_MailboxTrackingFolders` | [userrating](userrating.md) | `regardingobjectid` | `regardingobjectid_userrating` |
| `userrating_UserEntityInstanceDatas` | [userrating](userrating.md) | `objectid` | `objectid_userrating` |
| `userrating_ProcessSession` | [userrating](userrating.md) | `regardingobjectid` | `regardingobjectid_userrating` |
| `userrating_BulkDeleteFailures` | [userrating](userrating.md) | `regardingobjectid` | `regardingobjectid_userrating` |
| `userrating_PrincipalObjectAttributeAccesses` | [userrating](userrating.md) | `objectid` | `objectid_userrating` |


## Source

Generated from [userrating (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='userrating')) on 2026-05-07.