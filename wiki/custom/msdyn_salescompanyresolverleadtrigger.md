---
logical: "msdyn_salescompanyresolverleadtrigger"
display: "Trigger lead resolver società di vendita"
entitySetName: "msdyn_salescompanyresolverleadtriggers"
primaryId: "msdyn_salescompanyresolverleadtriggerid"
primaryName: "msdyn_emailaddress"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Trigger lead resolver società di vendita

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescompanyresolverleadtrigger` |
| Display name | Trigger lead resolver società di vendita |
| Display (plural) | Trigger lead resolver società di vendita |
| Schema name | `msdyn_SalesCompanyResolverLeadTrigger` |
| Entity set (Web API) | `msdyn_salescompanyresolverleadtriggers` |
| Primary id attribute | `msdyn_salescompanyresolverleadtriggerid` |
| Primary name attribute | `msdyn_emailaddress` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salescompanyresolverleadtriggers?$select=msdyn_emailaddress&$top=10
GET /api/data/v9.2/msdyn_salescompanyresolverleadtriggers(<guid>)
POST /api/data/v9.2/msdyn_salescompanyresolverleadtriggers
PATCH /api/data/v9.2/msdyn_salescompanyresolverleadtriggers(<guid>)
DELETE /api/data/v9.2/msdyn_salescompanyresolverleadtriggers(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentlastrun`, `msdyn_emailaddress`, `msdyn_researchagenttriggerdetails`, `msdyn_retrycount`, `msdyn_salescompanyresolverleadtriggerid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salescompanyresolverleadtrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescompanyresolverleadtrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescompanyresolverleadtrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescompanyresolverleadtrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salescompanyresolverleadtrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salescompanyresolverleadtrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salescompanyresolverleadtrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salescompanyresolverleadtrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescompanyresolverleadtrigger_SyncErrors` | [msdyn_salescompanyresolverleadtrigger](msdyn_salescompanyresolverleadtrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescompanyresolverleadtrigger` |
| `msdyn_salescompanyresolverleadtrigger_DuplicateMatchingRecord` | [msdyn_salescompanyresolverleadtrigger](msdyn_salescompanyresolverleadtrigger.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salescompanyresolverleadtrigger` |
| `msdyn_salescompanyresolverleadtrigger_DuplicateBaseRecord` | [msdyn_salescompanyresolverleadtrigger](msdyn_salescompanyresolverleadtrigger.md) | `baserecordid` | `baserecordid_msdyn_salescompanyresolverleadtrigger` |
| `msdyn_salescompanyresolverleadtrigger_AsyncOperations` | [msdyn_salescompanyresolverleadtrigger](msdyn_salescompanyresolverleadtrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescompanyresolverleadtrigger` |
| `msdyn_salescompanyresolverleadtrigger_MailboxTrackingFolders` | [msdyn_salescompanyresolverleadtrigger](msdyn_salescompanyresolverleadtrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescompanyresolverleadtrigger` |
| `msdyn_salescompanyresolverleadtrigger_UserEntityInstanceDatas` | [msdyn_salescompanyresolverleadtrigger](msdyn_salescompanyresolverleadtrigger.md) | `objectid` | `objectid_msdyn_salescompanyresolverleadtrigger` |
| `msdyn_salescompanyresolverleadtrigger_ProcessSession` | [msdyn_salescompanyresolverleadtrigger](msdyn_salescompanyresolverleadtrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescompanyresolverleadtrigger` |
| `msdyn_salescompanyresolverleadtrigger_BulkDeleteFailures` | [msdyn_salescompanyresolverleadtrigger](msdyn_salescompanyresolverleadtrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescompanyresolverleadtrigger` |
| `msdyn_salescompanyresolverleadtrigger_PrincipalObjectAttributeAccesses` | [msdyn_salescompanyresolverleadtrigger](msdyn_salescompanyresolverleadtrigger.md) | `objectid` | `objectid_msdyn_salescompanyresolverleadtrigger` |


## Source

Generated from [msdyn_salescompanyresolverleadtrigger (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salescompanyresolverleadtrigger')) on 2026-05-07.