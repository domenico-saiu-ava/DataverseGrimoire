---
logical: "msdynmkt_contactpointconsent4"
display: "Consenso punto di contatto"
entitySetName: "msdynmkt_contactpointconsent4s"
primaryId: "msdynmkt_contactpointconsent4id"
primaryName: "msdynmkt_contactpointvalue"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Consenso punto di contatto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_contactpointconsent4` |
| Display name | Consenso punto di contatto |
| Display (plural) | Consensi punti di contatto |
| Schema name | `msdynmkt_contactpointconsent4` |
| Entity set (Web API) | `msdynmkt_contactpointconsent4s` |
| Primary id attribute | `msdynmkt_contactpointconsent4id` |
| Primary name attribute | `msdynmkt_contactpointvalue` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_contactpointconsent4s?$select=msdynmkt_contactpointvalue&$top=10
GET /api/data/v9.2/msdynmkt_contactpointconsent4s(<guid>)
POST /api/data/v9.2/msdynmkt_contactpointconsent4s
PATCH /api/data/v9.2/msdynmkt_contactpointconsent4s(<guid>)
DELETE /api/data/v9.2/msdynmkt_contactpointconsent4s(<guid>)
```

## Attributes

Writable: **21** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_contactpointconsent4id`, `msdynmkt_contactpointconsenttype`, `msdynmkt_contactpointtype`, `msdynmkt_contactpointvalue`, `msdynmkt_logicalreason`, `msdynmkt_messageid`, `msdynmkt_migrationtimestamp`, `msdynmkt_modifiedonbehalf`, `msdynmkt_purposeid`, `msdynmkt_reason`, `msdynmkt_source`, `msdynmkt_topicid`, `msdynmkt_uionly_value_tracking`, `msdynmkt_value`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_contactpointconsent4_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_contactpointconsent4_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_contactpointconsent4_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_contactpointconsent4_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_contactpointconsent4` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_contactpointconsent4` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_contactpointconsent4` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_contactpointconsent4` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdynmkt_msdynmkt_contactpointconsent4_purposeId_m` | [msdynmkt_purpose](msdynmkt_purpose.md) | `msdynmkt_purposeid` | `msdynmkt_purposeId` |
| `msdynmkt_msdynmkt_contactpointconsent4_topicId_msd` | [msdynmkt_topic](msdynmkt_topic.md) | `msdynmkt_topicid` | `msdynmkt_topicId` |
| `email_msdynmkt_contactpointconsent4_messageid` | [email](email.md) | `msdynmkt_messageid` | `email_msdynmkt_messageid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_contactpointconsent4_SyncErrors` | [msdynmkt_contactpointconsent4](msdynmkt_contactpointconsent4.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent4` |
| `msdynmkt_contactpointconsent4_DuplicateMatchingRecord` | [msdynmkt_contactpointconsent4](msdynmkt_contactpointconsent4.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_contactpointconsent4` |
| `msdynmkt_contactpointconsent4_DuplicateBaseRecord` | [msdynmkt_contactpointconsent4](msdynmkt_contactpointconsent4.md) | `baserecordid` | `baserecordid_msdynmkt_contactpointconsent4` |
| `msdynmkt_contactpointconsent4_AsyncOperations` | [msdynmkt_contactpointconsent4](msdynmkt_contactpointconsent4.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent4` |
| `msdynmkt_contactpointconsent4_MailboxTrackingFolders` | [msdynmkt_contactpointconsent4](msdynmkt_contactpointconsent4.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent4` |
| `msdynmkt_contactpointconsent4_UserEntityInstanceDatas` | [msdynmkt_contactpointconsent4](msdynmkt_contactpointconsent4.md) | `objectid` | `objectid_msdynmkt_contactpointconsent4` |
| `msdynmkt_contactpointconsent4_ProcessSession` | [msdynmkt_contactpointconsent4](msdynmkt_contactpointconsent4.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent4` |
| `msdynmkt_contactpointconsent4_BulkDeleteFailures` | [msdynmkt_contactpointconsent4](msdynmkt_contactpointconsent4.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent4` |
| `msdynmkt_contactpointconsent4_PrincipalObjectAttributeAccesses` | [msdynmkt_contactpointconsent4](msdynmkt_contactpointconsent4.md) | `objectid` | `objectid_msdynmkt_contactpointconsent4` |


## Source

Generated from [msdynmkt_contactpointconsent4 (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_contactpointconsent4')) on 2026-05-07.