---
logical: "msdynmkt_preferencecenterlink"
display: "Collegamento al centro preferenze"
entitySetName: "msdynmkt_preferencecenterlinks"
primaryId: "msdynmkt_preferencecenterlinkid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Collegamento al centro preferenze

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_preferencecenterlink` |
| Display name | Collegamento al centro preferenze |
| Display (plural) | Collegamenti centro preferenze |
| Schema name | `msdynmkt_preferencecenterlink` |
| Entity set (Web API) | `msdynmkt_preferencecenterlinks` |
| Primary id attribute | `msdynmkt_preferencecenterlinkid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_preferencecenterlinks?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_preferencecenterlinks(<guid>)
POST /api/data/v9.2/msdynmkt_preferencecenterlinks
PATCH /api/data/v9.2/msdynmkt_preferencecenterlinks(<guid>)
DELETE /api/data/v9.2/msdynmkt_preferencecenterlinks(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`importsequencenumber`, `msdynmkt_contactpoint`, `msdynmkt_contactpointtype`, `msdynmkt_name`, `msdynmkt_preferencecenterlinkid`, `msdynmkt_targetentityid`, `msdynmkt_targetentityname`, `msdynmkt_trackingcontext`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_preferencecenterlink_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_preferencecenterlink_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_preferencecenterlink_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_preferencecenterlink_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_preferencecenterlink` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_preferencecenterlink_SyncErrors` | [msdynmkt_preferencecenterlink](msdynmkt_preferencecenterlink.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_preferencecenterlink` |
| `msdynmkt_preferencecenterlink_DuplicateMatchingRecord` | [msdynmkt_preferencecenterlink](msdynmkt_preferencecenterlink.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_preferencecenterlink` |
| `msdynmkt_preferencecenterlink_DuplicateBaseRecord` | [msdynmkt_preferencecenterlink](msdynmkt_preferencecenterlink.md) | `baserecordid` | `baserecordid_msdynmkt_preferencecenterlink` |
| `msdynmkt_preferencecenterlink_AsyncOperations` | [msdynmkt_preferencecenterlink](msdynmkt_preferencecenterlink.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_preferencecenterlink` |
| `msdynmkt_preferencecenterlink_MailboxTrackingFolders` | [msdynmkt_preferencecenterlink](msdynmkt_preferencecenterlink.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_preferencecenterlink` |
| `msdynmkt_preferencecenterlink_UserEntityInstanceDatas` | [msdynmkt_preferencecenterlink](msdynmkt_preferencecenterlink.md) | `objectid` | `objectid_msdynmkt_preferencecenterlink` |
| `msdynmkt_preferencecenterlink_ProcessSession` | [msdynmkt_preferencecenterlink](msdynmkt_preferencecenterlink.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_preferencecenterlink` |
| `msdynmkt_preferencecenterlink_BulkDeleteFailures` | [msdynmkt_preferencecenterlink](msdynmkt_preferencecenterlink.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_preferencecenterlink` |
| `msdynmkt_preferencecenterlink_PrincipalObjectAttributeAccesses` | [msdynmkt_preferencecenterlink](msdynmkt_preferencecenterlink.md) | `objectid` | `objectid_msdynmkt_preferencecenterlink` |


## Source

Generated from [msdynmkt_preferencecenterlink (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_preferencecenterlink')) on 2026-05-07.