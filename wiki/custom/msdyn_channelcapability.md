---
logical: "msdyn_channelcapability"
display: "Funzionalità canale"
entitySetName: "msdyn_channelcapabilities"
primaryId: "msdyn_channelcapabilityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Funzionalità canale

Funzionalità che può essere abilitata da un canale, ad esempio co-browsing, condivisione dello schermo.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelcapability` |
| Display name | Funzionalità canale |
| Display (plural) | Funzionalità canale |
| Schema name | `msdyn_channelcapability` |
| Entity set (Web API) | `msdyn_channelcapabilities` |
| Primary id attribute | `msdyn_channelcapabilityid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelcapabilities?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelcapabilities(<guid>)
POST /api/data/v9.2/msdyn_channelcapabilities
PATCH /api/data/v9.2/msdyn_channelcapabilities(<guid>)
DELETE /api/data/v9.2/msdyn_channelcapabilities(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_channelcapabilityid`, `msdyn_conversationaction`, `msdyn_escalationchannelmode`, `msdyn_name`, `msdyn_provider`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_provider_msdyn_channelcapability_Provider` | [msdyn_provider](msdyn_provider.md) | `msdyn_provider` | `msdyn_Provider` |
| `msdyn_msdyn_conversationaction_msdyn_channelcapability_ConversationAction` | [msdyn_conversationaction](msdyn_conversationaction.md) | `msdyn_conversationaction` | `msdyn_ConversationAction` |
| `lk_msdyn_channelcapability_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelcapability_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelcapability_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelcapability_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_channelcapability` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelcapability_SyncErrors` | [msdyn_channelcapability](msdyn_channelcapability.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelcapability` |
| `msdyn_channelcapability_DuplicateMatchingRecord` | [msdyn_channelcapability](msdyn_channelcapability.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_channelcapability` |
| `msdyn_channelcapability_DuplicateBaseRecord` | [msdyn_channelcapability](msdyn_channelcapability.md) | `baserecordid` | `baserecordid_msdyn_channelcapability` |
| `msdyn_channelcapability_AsyncOperations` | [msdyn_channelcapability](msdyn_channelcapability.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelcapability` |
| `msdyn_channelcapability_MailboxTrackingFolders` | [msdyn_channelcapability](msdyn_channelcapability.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelcapability` |
| `msdyn_channelcapability_UserEntityInstanceDatas` | [msdyn_channelcapability](msdyn_channelcapability.md) | `objectid` | `objectid_msdyn_channelcapability` |
| `msdyn_channelcapability_ProcessSession` | [msdyn_channelcapability](msdyn_channelcapability.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelcapability` |
| `msdyn_channelcapability_BulkDeleteFailures` | [msdyn_channelcapability](msdyn_channelcapability.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelcapability` |
| `msdyn_channelcapability_PrincipalObjectAttributeAccesses` | [msdyn_channelcapability](msdyn_channelcapability.md) | `objectid` | `objectid_msdyn_channelcapability` |


## Source

Generated from [msdyn_channelcapability (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channelcapability')) on 2026-05-07.